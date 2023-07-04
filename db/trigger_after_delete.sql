CREATE TRIGGER `rates_after_delete` AFTER DELETE ON `rates` FOR EACH ROW BEGIN
	
	DECLARE avg_rate FLOAT;
	 
	SET avg_rate = (SELECT avg(rate)  FROM rates WHERE tutor_userId = OLD.tutor_UserId AND lessonId = OLD.lessonId  LIMIT 1) ;
	
	IF NOT exists(select id from RateOveralls where tutorId = OLD.tutor_UserId and  lessonId = OLD.lessonId) THEN
		INSERT INTO RateOveralls (avg_rate , lessonId , tutorId) values(avg_rate, OLD.lessonId , OLD.tutor_UserId );
	ELSE
		UPDATE RateOveralls set avg_rate = avg_rate WHERE tutorId = OLD.tutor_UserId and  lessonId = OLD.lessonId;
	END IF;

END