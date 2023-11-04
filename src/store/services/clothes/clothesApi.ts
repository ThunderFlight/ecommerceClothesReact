import { Clothes } from "@/store/types"
import baseApi from "../baseApi"

const clothesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getClothes: build.query<Clothes[], void>({
            query: () => 'products',
        }),
    }),
})

export const { useGetClothesQuery } = clothesApi