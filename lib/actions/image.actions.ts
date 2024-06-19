'use server'

import { revalidatePath } from "next/cache";
import { ConnectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Image from "../database/models/image.model";
import { redirect } from "next/navigation";


const populateUser = (query: any) => query.populate({
    path: 'author',
    moder: User,
    select: '_id firstName lastName'
})


// ADD IMAGE
export async function addImage({ image, userId, path }: AddImageParams) {
    try {
      await ConnectToDatabase();
  
      const author = await User.findById(userId);
  
      if (!author) {
        throw new Error("User not found");
      }
  
      const newImage = await Image.create({
        ...image,
        author: author._id,
      })
  
      revalidatePath(path);
  
      return JSON.parse(JSON.stringify(newImage));
    } catch (error) {
      handleError(error)
    }
  }
  
  // UPDATE IMAGE
  export async function updateImage({ image, userId, path }: UpdateImageParams) {
    try {
      await ConnectToDatabase();
      console.log('hello1')
      
      const imageToUpdate = await Image.findById(image._id);
      console.log('hello2')
      console.log(imageToUpdate)
      
      if (!imageToUpdate || imageToUpdate.author.toHexString() !== userId) {
          throw new Error("Unauthorized or image not found");
        }
        
        console.log('hello3')
      const updatedImage = await Image.findByIdAndUpdate(
        imageToUpdate._id,
        image,
        { new: true }
      )
  
      revalidatePath(path);
  
      return JSON.parse(JSON.stringify(updatedImage));
    } catch (error) {
      handleError(error)
    }
  }
  
  // DELETE IMAGE
  export async function deleteImage(imageId: string) {
    try {
      await ConnectToDatabase();
  
      await Image.findByIdAndDelete(imageId);
    } catch (error) {
      handleError(error)
    } finally{
      redirect('/')
    }
  }
  



// Get Image
export async function getImage(imageId: string) {
    try {
        await ConnectToDatabase()
        const image = await populateUser(Image.findById(imageId))

        if (!image) {
            throw new Error('image not found.')
        }
        return JSON.parse(JSON.stringify(image))
    } catch (error) {
        handleError(error)
    }
}
