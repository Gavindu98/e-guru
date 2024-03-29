import axios from "axios"
import { AppResponse } from "../Models/Response"
import { Util } from "../Util"


export class LibraryService {
    public static async getAllMyBooks(): Promise<AppResponse<any[]>> {
        const token = localStorage.getItem("token")
        const url = Util.apiPrivateUrl("resource/resource-all-view");
        return await axios.post<Partial<any>, AppResponse<any[]>>(url, {}, { headers: { "Authorization": `Bearer ${token}` } });

    }
    public static async getAllLessons(data: any): Promise<AppResponse<any[]>> {
        const token = localStorage.getItem("token")
        const url = Util.apiPrivateUrl(`lesson/lesson-all-view`);
        const res = await axios.post<any, AppResponse<any>>(url, data, { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }
    public static async addBook(postData: any): Promise<AppResponse<any>> {
        const token = localStorage.getItem("token")
        const ep = Util.apiPrivateUrl("resource/resource-create")
        const res = await axios.post<any, AppResponse<any>>(ep, postData, { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }
    public static async addlesson(postData: any): Promise<AppResponse<any>> {
        const token = localStorage.getItem("token")
        const ep = Util.apiPrivateUrl("lesson/lesson-create")
        const res = await axios.post<any, AppResponse<any>>(ep, postData, { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }
    // public static async likeUnlikeArticle(articleId: string, userId: any, boolVal: Boolean): Promise<AppResponse<any>> {
    //     const token = localStorage.getItem("token")
    //     console.log(token)
    //     const ep = Util.apiPrivateUrl(`post/post-like/${articleId}/action-owner/${userId}/state/${boolVal}`)
    //     console.log(ep)
    //     const res = await axios.post<any, AppResponse<any>>(ep, {}, { headers: { "Authorization": `Bearer ${token}` } })
    //     return res
    // }
    public static async getSingleBook(bookId: any): Promise<AppResponse<any[]>> {
        const token = localStorage.getItem("token")
        const url = Util.apiPrivateUrl(`resource/resource-single-view/${bookId}`);
        return await axios.post<Partial<any>, AppResponse<any[]>>(url, {}, { headers: { "Authorization": `Bearer ${token}` } });

    }
    public static async getSingleLesson(lessonId: any): Promise<AppResponse<any[]>> {
        const token = localStorage.getItem("token")
        const url = Util.apiPrivateUrl(`lesson/lesson-single-view/${lessonId}`);
        return await axios.get<Partial<any>, AppResponse<any[]>>(url, { headers: { "Authorization": `Bearer ${token}` } });

    }
    // public static async addCommentToArticle(commentData: any): Promise<AppResponse<any>> {
    //     const token = localStorage.getItem("token")
    //     const ep = Util.apiPrivateUrl("post-comment/comment-create")
    //     const res = await axios.post<any, AppResponse<any>>(ep, commentData, { headers: { "Authorization": `Bearer ${token}` } })
    //     return res
    // }
    // public static async getAllCommentInSinglePost(postId: any): Promise<AppResponse<any[]>> {
    //     const token = localStorage.getItem("token")
    //     const url = Util.apiPrivateUrl(`post-comment/comment-all-view`);
    //     const res = await axios.post<any, AppResponse<any>>(url, postId, { headers: { "Authorization": `Bearer ${token}` } })
    //     return res
    // }
    public static async deleteBook(postId: any): Promise<AppResponse<any[]>> {
        const token = localStorage.getItem("token")
        const url = Util.apiPrivateUrl(`resource/resource-delete`);
        const res = await axios.post<any, AppResponse<any>>(url, postId, { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }
    public static async deleteLesson(lessonId: any): Promise<AppResponse<any[]>> {
        const token = localStorage.getItem("token")
        const url = Util.apiPrivateUrl(`lesson/lesson-delete`);
        const res = await axios.post<any, AppResponse<any>>(url, lessonId, { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }
}
