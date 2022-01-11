

export default function(to, from, savedPosition) {
      if (to.hash) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    }
