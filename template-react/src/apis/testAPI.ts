import { HTTP } from "src/apis/httpAPI";
import { type IPost } from "src/common/interfaces";

export const getPosts = () => HTTP.get<IPost[]>({ url: "/posts" });
