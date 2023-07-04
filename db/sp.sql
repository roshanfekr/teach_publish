DELIMITER $$


DECLARE id INT;  
DECLARE avg_rate INT;  
DECLARE finished INTEGER DEFAULT 0;
  
DECLARE Get_cur CURSOR 
FOR SELECT u.id , ro.*  FROM Users  AS u INNER JOIN UserLessons ul ON ul.userId = u.id  LEFT JOIN RateOveralls AS ro ON u.id = ro.tutorId ;  

DECLARE CONTINUE HANDLER 
FOR NOT FOUND SET finished = 1;

OPEN Get_cur; 
 
go1: LOOPtutorloo_teach
  	
	FETCH Get_cur INTO id , avg_rate;  
	
	INSERT INTO rateoveralls (avg_rate , tutorId, lessonId) VALUES(avg_rate , c_id, avg_rate);  
	
		IF finished = 1 THEN 
			LEAVE go1;
		END IF;
		
 
END LOOP go1; 
  
CLOSE Get_cur;  

DELIMITER ;