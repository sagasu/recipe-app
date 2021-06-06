import { createClient, createPreviewSubscriptionHook, createImageUrlBuilder, createPortableTextComponent } from "next-sanity";


const config = {
    projectId: "",
    dataset: "",
    apiVersion: "",
    useCdn: true

}

export const sanityClient = createClient()