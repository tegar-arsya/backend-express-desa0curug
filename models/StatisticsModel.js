const db = require('../Config/db');

// Regions
const getAllRegions = async () => {
  const [rows] = await db.query('SELECT * FROM regions');
  return rows;
};

const createRegion = async (data) => {
  const { name, population } = data;
  const [result] = await db.query('INSERT INTO regions (name, population) VALUES (?, ?)', [name, population]);
  return result.insertId;
};

const updateRegion = async (id, data) => {
  const { name, population } = data;
  const [result] = await db.query('UPDATE regions SET name = ?, population = ? WHERE id = ?', [name, population, id]);
  return result;
};

const deleteRegion = async (id) => {
  const [result] = await db.query('DELETE FROM regions WHERE id = ?', [id]);
  return result;
};

// Jobs
const getAllJobs = async () => {
  const [rows] = await db.query('SELECT * FROM jobs');
  return rows;
};

const createJob = async (data) => {
  const { job_title, count } = data;
  const [result] = await db.query('INSERT INTO jobs (job_title, count) VALUES (?, ?)', [job_title, count]);
  return result.insertId;
};

const updateJob = async (id, data) => {
  const { job_title, count } = data;
  const [result] = await db.query('UPDATE jobs SET job_title = ?, count = ? WHERE id = ?', [job_title, count, id]);
  return result;
};

const deleteJob = async (id) => {
  const [result] = await db.query('DELETE FROM jobs WHERE id = ?', [id]);
  return result;
};

// Education Levels
const getAllEducationLevels = async () => {
  const [rows] = await db.query('SELECT * FROM education');
  return rows;
};

const createEducationLevel = async (data) => {
  const { education_level, count } = data;
  const [result] = await db.query('INSERT INTO education (education_level, count) VALUES (?, ?)', [education_level, count]);
  return result.insertId;
};

const updateEducationLevel = async (id, data) => {
  const { education_level, count } = data;
  const [result] = await db.query('UPDATE education SET education_level = ?, count = ? WHERE id = ?', [education_level, count, id]);
  return result;
};

const deleteEducationLevel = async (id) => {
  const [result] = await db.query('DELETE FROM education WHERE id = ?', [id]);
  return result;
};

// Population
const getAllPopulation = async () => {
  const [rows] = await db.query('SELECT * FROM population');
  return rows[0];
};

const createPopulation = async (data) => {
    const { total_population, male_population, female_population } = data;
    const [result] = await db.query('INSERT INTO population (total_population, male_population, female_population) VALUES (?, ?, ?)', [total_population, male_population, female_population]);
    return result.insertId;
  };

  const deletePopulation = async (id) => {
    const [result] = await db.query('DELETE FROM population WHERE id = ?', [id]);
    return result;
  };
  
const updatePopulation = async (data) => {
  const { total_population, male_population, female_population } = data;
  const [result] = await db.query('UPDATE population SET total_population = ?, male_population = ?, female_population = ? WHERE id = 1', [total_population, male_population, female_population]);
  return result;
};

// Marital Status
const getAllMaritalStatuses = async () => {
  const [rows] = await db.query('SELECT * FROM marital_status');
  return rows;
};

const createMaritalStatus = async (data) => {
  const { status, count } = data;
  const [result] = await db.query('INSERT INTO marital_status (status, count) VALUES (?, ?)', [status, count]);
  return result.insertId;
};

const updateMaritalStatus = async (id, data) => {
  const { status, count } = data;
  const [result] = await db.query('UPDATE marital_status SET status = ?, count = ? WHERE id = ?', [status, count, id]);
  return result;
};

const deleteMaritalStatus = async (id) => {
  const [result] = await db.query('DELETE FROM marital_status WHERE id = ?', [id]);
  return result;
};

// Religion
const getAllReligions = async () => {
  const [rows] = await db.query('SELECT * FROM religion');
  return rows;
};

const createReligion = async (data) => {
  const { religion_name, count } = data;
  const [result] = await db.query('INSERT INTO religion (religion_name, count) VALUES (?, ?)', [religion_name, count]);
  return result.insertId;
};

const updateReligion = async (id, data) => {
  const { religion_name, count } = data;
  const [result] = await db.query('UPDATE religion SET religion_name = ?, count = ? WHERE id = ?', [religion_name, count, id]);
  return result;
};

const deleteReligion = async (id) => {
  const [result] = await db.query('DELETE FROM religion WHERE id = ?', [id]);
  return result;
};

// Voters
const getAllVoters = async () => {
  const [rows] = await db.query('SELECT * FROM voters');
  return rows;
};

const createVoter = async (data) => {
  const { name, status } = data;
  const [result] = await db.query('INSERT INTO voters (name, status) VALUES (?, ?)', [name, status]);
  return result.insertId;
};

const updateVoter = async (id, data) => {
  const { name, status } = data;
  const [result] = await db.query('UPDATE voters SET name = ?, status = ? WHERE id = ?', [name, status, id]);
  return result;
};

const deleteVoter = async (id) => {
  const [result] = await db.query('DELETE FROM voters WHERE id = ?', [id]);
  return result;
};

module.exports = {
  getAllRegions, createRegion, updateRegion, deleteRegion, 
  getAllJobs, createJob, updateJob, deleteJob, 
  getAllEducationLevels, createEducationLevel, updateEducationLevel, deleteEducationLevel, 
  getAllPopulation, updatePopulation, deletePopulation, createPopulation,
  getAllMaritalStatuses, createMaritalStatus, updateMaritalStatus, deleteMaritalStatus, 
  getAllReligions, createReligion, updateReligion, deleteReligion, 
  getAllVoters, createVoter, updateVoter, deleteVoter 
};
