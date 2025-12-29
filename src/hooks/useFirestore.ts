import { useState, useCallback } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { Project, Experience, Education, Skill } from "../types";

export const useFirestore = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [projectsSnap, expSnap, eduSnap, skillSnap] = await Promise.all([
        getDocs(query(collection(db, "projects"), orderBy("createdAt", "desc"))),
        getDocs(query(collection(db, "experiences"), orderBy("order", "asc"))),
        getDocs(query(collection(db, "educations"), orderBy("order", "asc"))),
        getDocs(query(collection(db, "skills"), orderBy("order", "asc"))),
      ]);

      setProjects(projectsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Project)));
      setExperiences(expSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Experience)));
      setEducations(eduSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Education)));
      setSkills(skillSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Skill)));
    } catch (err: any) {
      console.error("Error fetching data: ", err);
      setError(err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }, []);

  const saveDocument = async (
    type: "projects" | "experiences" | "educations" | "skills",
    data: any,
    id?: string
  ) => {
    try {
      if (id) {
        await updateDoc(doc(db, type, id), data);
      } else {
        await addDoc(collection(db, type), data);
      }
      await fetchData();
      return true;
    } catch (err: any) {
      console.error("Error saving document: ", err);
      setError(err.message || "Failed to save document");
      return false;
    }
  };

  const deleteDocument = async (
    type: "projects" | "experiences" | "educations" | "skills",
    id: string
  ) => {
    try {
      await deleteDoc(doc(db, type, id));
      await fetchData();
      return true;
    } catch (err: any) {
      console.error("Error deleting document: ", err);
      setError(err.message || "Failed to delete document");
      return false;
    }
  };

  return {
    projects,
    experiences,
    educations,
    skills,
    loading,
    error,
    fetchData,
    saveDocument,
    deleteDocument,
  };
};
