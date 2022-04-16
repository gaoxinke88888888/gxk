import request from "@/service";
interface Req {
    r18?: number;
    num?: number;
    areaID?: string;
}
interface Res {
    code:number;
    message: string;
    data: any[];
}
export const getloli = (data?: Req) => {
    return request<Req, Res>({
        url: "/api/lolicon",
        method: "GET",
        data,
        interceptors: {
            requestInterceptors(res) {
                return res;
            },
            responseInterceptors(result) {
                return result;
            },
        },
    });
};
