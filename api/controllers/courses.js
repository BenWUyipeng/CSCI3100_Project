import { db } from "../db.js";

export const addCourse = (req, res) => {
  const q = "SELECT * FROM courses WHERE cid = ?";

  db.query(q, [req.body.cid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Course already exist.");

    const q = "INSERT INTO courses(`cid`,`name`,`startTime`,`endTime`,`place`,`department`,`instructor`,`capacity`,`current_capacity`,`description`,`Term`,`date`) VALUES (?)";
    const values = [req.body.cid, req.body.name, req.body.startTime, req.body.endTime, 
      req.body.place, req.body.department, req.body.instructor, req.body.capacity, req.body.current_capacity, 
      req.body.description, req.body.Term, req.body.date];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Course added successfully.");
    });
  });
};

export const delCourse = (req, res) => {
  const q = "SELECT * FROM courses WHERE cid = ?";

  db.query(q, [req.body.cid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(409).json("Course NOT exist");

    const q = "DELETE FROM courses where cid = ?";
    const values = [req.body.cid];
    
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Course deleted successfully.");
    });
  });
};

export const getCourseByID = (req, res) => {
    const q = "SELECT cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i')"+ 
    " AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description FROM courses WHERE cid = ?";
  
    db.query(q, [req.params.courseId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);//array of objects
    });
};

export const getCourseByName = (req, res) => {
  const q = "SELECT cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i')"+ 
  " AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description FROM courses WHERE name = ?";

  db.query(q, [req.params.courseName], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);//array of objects
  });
};

export const getCourseByDepartment = (req, res) => {
  const q = "SELECT cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i')"+ 
  " AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description FROM courses WHERE department = ?";

  db.query(q, [req.params.courseDepartment], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);//array of objects
  });
};

export const getCourseByTime = (req, res) => {
  const q = "SELECT cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i')"+ 
  " AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description FROM courses WHERE"+
  " startTime BETWEEN ? AND ?";

  db.query(q, [req.body.startRange, req.body.endRange], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);//array of objects
  });
};

export const getAllCourses = (req, res) => {
  const q = "SELECT * FROM courses";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);//array of objects
  });
};

export const courseUpdate = (req, res) => {
  const q = "SELECT * FROM courses WHERE cid =?";
  db.query(q, [req.body.cid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data.length) return res.status(409).json("Please enter correct course code.");

    const q = "UPDATE courses SET description = ? WHERE cid = ?";
    db.query(q, [req.body.description, req.body.cid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Course updated successfully.");
    })
  });
};

export const ClassroomUpdate = (req, res) => {
  console.log("test 0")

  const qq = "SELECT * FROM courses WHERE (startTime BETWEEN ? AND ?)";
  db.query(qq, [req.body.startTime, req.body.endTime], (err, data) => {
    console.log(err)
    if (err) return res.status(500).json(err);
    if (data.length!=0) return res.status(409).json("There is no such course or you entered wrong information");

  const qqu = "UPDATE courses SET place = ? where cid = ?";
  db.query(qqu, [req.body.place, req.body.cid], (err, data) => {
    if (err) res.status(500).json(err);
    if (!err) return res.status(200).json("Course updated successfully.");
    });
});
};
