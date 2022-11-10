import type ArticlePriceData from "@/types/ArticlePriceData";

export default interface ArticleDetailData {
    id?: number
    detail_name?: string
    prices?: Array<ArticlePriceData>
}