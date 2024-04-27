import { getRequest } from "src/apis/httpAPI";
import { type IPost } from "src/utils/interfaces";

export const getPosts = () => getRequest<IPost[]>({ url: "/posts" });
