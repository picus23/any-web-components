

export interface IBreadСrumbs {
    id: number,
    title: string,
    url: string,
}


export interface NextUrl {
    pathname: string, 
    query?: {
        [prop: string]: string,
    },
}