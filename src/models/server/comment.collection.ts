import { db, commentCollection } from "../name";
import { databases } from "./config";
import { Permission } from "node-appwrite";

export default async function createCommentCollection() {
  await databases.createCollection(db, commentCollection, commentCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);
  console.log(`Collection ${commentCollection} created`);

  await Promise.all([
    databases.createStringAttribute(db, commentCollection, "content", 10000, true),
    databases.createStringAttribute(db, commentCollection, "authorId", 50, true),
    databases.createStringAttribute(db, commentCollection, "questionId", 50, true),
  ]);

  
}