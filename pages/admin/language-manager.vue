<template>
  <div class="w-100">
    <b-container fluid>
      <!-- User Interface controls -->
      <b-row >

        <b-col lg="4" class="my-1">
          <b-form-group
            label="Filter"
            label-for="filter-input"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              ></b-form-input>

              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col lg="4" class="my-1">
          <b-form-group
            label="Filter On"
            description="Leave all unchecked to filter on all data"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              v-model="filterOn"
              :aria-describedby="ariaDescribedby"
              class="mt-1"
            >
              <b-form-checkbox value="key">Key</b-form-checkbox>
              <b-form-checkbox value="value">Value</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
        <b-col lg="4" class="my-1">
          <b-button size="sm" @click="saveAndReload">Reload language Now</b-button>
        </b-col>

      </b-row>

      <!-- Main table element -->
      <b-table
        :items="items"
        :fields="fields"
        :filter="filter"
        :filter-included-fields="filterOn"
        stacked="md"
        show-empty
        small
        @filtered="onFiltered"
      >
        <template v-slot:cell(index)="row">
          {{ row.index + 1 }}
        </template>
        <template #cell(name)="row">
          {{ row.value.first }} {{ row.value.last }}
        </template>
        <template #cell(actions)="row">
          <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
            Edit
          </b-button>
        </template>
      </b-table>
      <!-- Info modal -->
      <b-modal id="lang-modal" centered :title="infoModal.title" ok-title="Save" @ok="saveLanguage" @hide="resetInfoModal">
          <b-form-group id="input-g-key" label="Key" label-for="input-key">
            <b-form-input disabled id="input-value" class="w-100" v-model="infoModal.key">
            </b-form-input>
          </b-form-group>
          <b-form-group id="input-g-value" label="Value" label-for="input-value">
          <b-form-textarea id="input-value" class="w-100"  v-model="infoModal.value">
          </b-form-textarea>
          </b-form-group>
      </b-modal>
    </b-container>
  </div>

</template>

<script>
import {required, requiredIf} from "vuelidate/lib/validators";

export default {
  layout: 'AdminTemplate',
  name: "users"
  ,
  data() {
    return {
      items: [],
      fields: [
        {key: 'index', label: 'index', sortable: false,thStyle:{width:'80px'}},
        {key: 'key', label: 'Key', sortable: true},
        {key: 'value', label: 'Value', sortable: true},
        {key: 'actions', label: 'Actions', sortable: false,thStyle:{width:'100px'}}
      ],
      filter: null,
      filterOn: [],
      infoModal: {
        title: '',
        id:'',
        key: '',
        value:''
      }
    }
  },
  mounted() {
    this.readFiles();
    this.getAll()
  },
  methods:
    {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index + 1}`
        this.infoModal.id = item.id;
        this.infoModal.key =  item.key
        this.infoModal.value =  item.value
        this.$root.$emit('bv::show::modal', 'lang-modal', button)
      },
      resetInfoModal() {
        this.infoModal.id = 0;
        this.infoModal.title = ''
        this.infoModal.key = ''
        this.infoModal.value = ''
      },
      saveLanguage(){
        this.$axios.post("language/saveLanguage",this.infoModal).then((res) => {
           let idx =this.items.findIndex(function (obj) {
            return obj.id ===  res.data.id
          })
          this.$set(this.items,idx,res.data)
          console.log(res.data)
        }).catch((err) => {

        })
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      saveAndReload() {
        this.$axios.post("language/saveAndReload").then((res) => {
          console.log(res.data)
        }).catch((err) => {
        })
      },
      getAll() {
        this.$axios.post("language/getAll").then((res) => {
          console.log(res.data)
          this.items = res.data
        }).catch((err) => {

        })
      },
      readFiles() {
        this.$axios.post("language/readFiles").then((res) => {
          console.log(res.data)
        }).catch((err) => {

        })
      },

    }

}
</script>

<style scoped>


</style>
