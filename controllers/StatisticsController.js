const { 
    getAllRegions, createRegion, updateRegion, deleteRegion, 
    getAllJobs, createJob, updateJob, deleteJob, 
    getAllEducationLevels, createEducationLevel, updateEducationLevel, deleteEducationLevel, 
    getAllPopulation, updatePopulation, deletePopulation, createPopulation,
    getAllMaritalStatuses, createMaritalStatus, updateMaritalStatus, deleteMaritalStatus, 
    getAllReligions, createReligion, updateReligion, deleteReligion, 
    getAllVoters, createVoter, updateVoter, deleteVoter 
  } = require('../models/StatisticsModel');
  
  const getStatistics = async (req, res) => {
    try {
      const regions = await getAllRegions();
      const jobs = await getAllJobs();
      const educationLevels = await getAllEducationLevels();
      const population = await getAllPopulation();
      const maritalStatuses = await getAllMaritalStatuses();
      const religions = await getAllReligions();
      const voters = await getAllVoters();
  
      res.status(200).json({ regions, jobs, educationLevels, population, maritalStatuses, religions, voters });
    } catch (error) {
      console.error('Error fetching statistics:', error);
      res.status(500).json({ message: 'Error fetching statistics', error: error.message });
    }
  };
  
  const createStatistic = async (req, res) => {
    try {
      const { type, data } = req.body;
      let result;
      let table;
  
      switch(type) {
        case 'region':
          result = await createRegion(data);
          table = 'Region';
          break;
        case 'job':
          result = await createJob(data);
          table = 'Job';
          break;
        case 'education':
          result = await createEducationLevel(data);
          table = 'Education Level';
          break;
        case 'population':
          result = await createPopulation(data);
          table = 'Population';
          break;
        case 'marital_status':
          result = await createMaritalStatus(data);
          table = 'Marital Status';
          break;
        case 'religion':
          result = await createReligion(data);
          table = 'Religion';
          break;
        case 'voter':
          result = await createVoter(data);
          table = 'Voter';
          break;
        default:
          return res.status(400).json({ message: 'Invalid type' });
      }
  
      res.status(201).json({ 
        message: `Statistic created successfully in ${table}`,
        result
      });
    } catch (error) {
      console.error('Error creating statistic:', error);
      res.status(500).json({ message: 'Error creating statistic', error: error.message });
    }
  };
  
  
  const updateStatistic = async (req, res) => {
    const { id } = req.params;
    const { type, data } = req.body;
    let table;
  
    try {
      let result;
  
      switch(type) {
        case 'region':
          result = await updateRegion(id, data);
          table = 'Region';
          break;
        case 'job':
          result = await updateJob(id, data);
          table = 'Job';
          break;
        case 'education':
          result = await updateEducationLevel(id, data);
          table = 'Education Level';
          break;
        case 'population':
          result = await updatePopulation(data);
          table = 'Population';
          break;
        case 'marital_status':
          result = await updateMaritalStatus(id, data);
          table = 'Marital Status';
          break;
        case 'religion':
          result = await updateReligion(id, data);
          table = 'Religion';
          break;
        case 'voter':
          result = await updateVoter(id, data);
          table = 'Voter';
          break;
        default:
          return res.status(400).json({ message: 'Invalid type' });
      }
  
      res.status(200).json({ 
        message: `Statistic updated successfully in ${table}`,
        result
      });
    } catch (error) {
      console.error('Error updating statistic:', error);
      res.status(500).json({ message: 'Error updating statistic', error: error.message });
    }
  };
  
  
  const deleteStatistic = async (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    let table;
  
    try {
      let result;
  
      switch(type) {
        case 'region':
          result = await deleteRegion(id);
          table = 'Region';
          break;
        case 'job':
          result = await deleteJob(id);
          table = 'Job';
          break;
        case 'education':
          result = await deleteEducationLevel(id);
          table = 'Education Level';
          break;
          case 'population':
            result = await deletePopulation(id);
          table = 'Population';
          break;
        case 'marital_status':
          result = await deleteMaritalStatus(id);
          table = 'Marital Status';
          break;
        case 'religion':
          result = await deleteReligion(id);
          table = 'Religion';
          break;
        case 'voter':
          result = await deleteVoter(id);
          table = 'Voter';
          break;
        default:
          return res.status(400).json({ message: 'Invalid type' });
      }
  
      res.status(200).json({ 
        message: `Statistic deleted successfully from ${table}`,
        result
      });
    } catch (error) {
      console.error('Error deleting statistic:', error);
      res.status(500).json({ message: 'Error deleting statistic', error: error.message });
    }
  };
  
  
  module.exports = {
    getStatistics,
    createStatistic,
    updateStatistic,
    deleteStatistic,
  };
  