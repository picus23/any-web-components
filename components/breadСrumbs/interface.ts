

export interface IBreadСrumbs {
    id: number,
    title: string,
    url: string,
    children?: IBreadСrumbs[],
    isFolder?: 0 | 1,
}


export interface NextUrl {
    pathname: string, 
    query?: {
        [prop: string]: string,
    },
}