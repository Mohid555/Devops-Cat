import axios from "axios";

const API = "http://localhost:5000";

// 🔹 Get all events
export const getEvents = async () => {
  const res = await axios.get(`${API}/events`);
  return res.data;
};

// 🔹 Delete event
export const deleteEvent = async (id) => {
  await axios.delete(`${API}/delete-event/${id}`);
};

// 🔹 Mark as done
export const markDone = async (id) => {
  await axios.put(`${API}/mark-done/${id}`);
};