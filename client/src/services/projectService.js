// client/src/services/projectService.js
import api from './api';

export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const getProject = async (projectId) => {
  const response = await api.get(`/projects/${projectId}`);
  return response.data;
};

export const createProject = async (projectData) => {
  const response = await api.post('/projects', projectData);
  return response.data;
};

export const updateProject = async (projectId, projectData) => {
  const response = await api.put(`/projects/${projectId}`, projectData);
  return response.data;
};

export const deleteProject = async (projectId) => {
  const response = await api.delete(`/projects/${projectId}`);
  return response.data;
};

export const getProjectFiles = async (projectId) => {
  const response = await api.get(`/projects/${projectId}/files`);
  return response.data;
};

export const createFile = async (projectId, fileData) => {
  const response = await api.post(`/projects/${projectId}/files`, fileData);
  return response.data;
};

export const getFileContent = async (projectId, fileId) => {
  const response = await api.get(`/projects/${projectId}/files/${fileId}`);
  return response.data;
};

export const updateFileContent = async (projectId, fileId, content) => {
  const response = await api.put(`/projects/${projectId}/files/${fileId}`, { content });
  return response.data;
};

export const deleteFile = async (projectId, fileId) => {
  const response = await api.delete(`/projects/${projectId}/files/${fileId}`);
  return response.data;
};

export const shareProject = async (projectId, shareData) => {
  const response = await api.post(`/projects/${projectId}/share`, shareData);
  return response.data;
};