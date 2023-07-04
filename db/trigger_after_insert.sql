CREATE DEFINER=`root`@`localhost` TRIGGER `rates_after_insert` AFTER INSERT ON `rates` FOR EACH ROW BEGIN
	
	DECLARE avg_rate FLOAT;
	 
	SET avg_rate = (SELECT avg(rate)  FROM rates WHERE tutor_userId = NEW.tutor_UserId AND lessonId = NEW.lessonId  LIMIT 1) ;
	
	IF NOT exists(select id from RateOveralls where tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId) THEN
		INSERT INTO RateOveralls (avg_rate , lessonId , tutorId) values(avg_rate, NEW.lessonId , NEW.tutor_UserId );
	ELSE
		UPDATE RateOveralls set avg_rate = avg_rate WHERE tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId;
	END IF;

END