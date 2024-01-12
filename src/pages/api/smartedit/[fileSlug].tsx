// pages/api/transform.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { 
    getPageTitleTransformed, 
    getAllPageTransformedTransform, 

    isProductCarosel,
    isFullWidthBanner, 
    isIncludeComponent,
    getFullWidthTransform, 
    getProductCarasolTransform, 
    getSectionHeadingTransform, 
    // getLandscapeCardTransform,
    // getPortraitCardTransform,
    getHalfWidthTransform,
    getSubscriptionBannerTransform,
    getAccordionTransform,
    getBlogCarouselTransform,
    getBannerCarouselTransform,
    getRewardBannerTransform,
    getVideoAndTextBannerTransform,
    getShortBannerTransform,
} from '@/utils/helper';
import _ from 'lodash'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { fileSlug },
    } = req;
    try {
        const isReadFromUrl = process.env.READ_FROM_URL === 'true';
        const sourceData = isReadFromUrl ? await getJSONDataFromUrl(fileSlug as string) : await getJSONDataFromSource(fileSlug as string);
        const outputData = handleTransformData(sourceData)
        res.status(200).json(outputData);
    } catch (error: { message: string } | any) {
        console.log(error, "ERROR")
        res.status(500).json({ error: error.message });
    }
};

const getJSONDataFromUrl =  (fileSlug: string): Record<string, any> => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.FILE_URL_PREFIX}${fileSlug}.json`).then((response) => {
            if (!response.ok) {
                reject({ message: `Can't find or read file with name ${fileSlug}.json from url` });
            }
            resolve(response.json())
        })

        // const sourceFilePath = path.join(process.cwd(), 'src', 'source', `${fileSlug}.json`);
        // const sourceData = JSON.parse(fs.readFileSync(sourceFilePath, 'utf-8'));
        // resolve(sourceData);
    })

}

const getJSONDataFromSource = (fileSlug: string): Record<string, any> => {
    return new Promise((resolve, reject) => {
        try {
            const sourceFilePath = path.join(process.cwd(), 'src', 'source', `${fileSlug}.json`);
            const sourceData = JSON.parse(fs.readFileSync(sourceFilePath, 'utf-8'));
            resolve(sourceData);
        } catch (e) {
            reject({ message: `Can't find or read file with name ${fileSlug}.json from source` });

        }
    })

}

const handleTransformData = (sourceData: Record<string, any>) => {
    let modules: any = []
    sourceData?.page?.contentSlots?.contentSlot.map((eachContent: Record<string, any>, index: number) => {
        const eachOutputFromInput = [];
        // const allPageData = getAllPageTransformedTransform(eachContent);
        // eachOutputFromInput.push(allPageData);
        //refer input3.json
        let componentsInsideSection = eachContent?.components?.component;
        if (!_.isArray(componentsInsideSection)) {
            componentsInsideSection = [componentsInsideSection];
        }
        const sectionData = getSectionHeadingTransform(eachContent);
        eachOutputFromInput.push(sectionData);
        // comment sectionData for allPage at a time only allow getFullWidthTransform
        componentsInsideSection.map((eachComponent: Record<string, any>) => {
            if (isProductCarosel(eachComponent?.uid)) {
                const productCaroselData = getProductCarasolTransform(eachComponent)
                eachOutputFromInput.push(productCaroselData)
            }
            if (isFullWidthBanner(eachComponent?.uid)) {
                const fullWidthData = getFullWidthTransform(eachComponent);
                eachOutputFromInput.push(fullWidthData)
            }
            // if(isIncludeComponent(eachComponent?.uid,"landscape")){
            //     const landcapeCardData = getLandscapeCardTransform(eachComponent)
            //     eachOutputFromInput.push(landcapeCardData)
            // }
            // if(isIncludeComponent(eachComponent?.uid,"portrait")){
            //     const portraitCardData = getPortraitCardTransform(eachComponent)
            //     eachOutputFromInput.push(portraitCardData)
            // }
            if(isIncludeComponent(eachComponent?.uid,"half_width")){
                const HalfWidthData = getHalfWidthTransform(eachComponent)
                eachOutputFromInput.push(HalfWidthData)
            }
            if(isIncludeComponent(eachComponent?.uid,"subscription")){
                const SubscriptionBannerData = getSubscriptionBannerTransform(eachComponent)
                eachOutputFromInput.push(SubscriptionBannerData)
            }
            if(isIncludeComponent(eachComponent?.uid,"accordion")){
                const AccordionData = getAccordionTransform(eachComponent)
                eachOutputFromInput.push(AccordionData)
            }
            if(isIncludeComponent(eachComponent?.uid,"blog_carousel")){
                const blogCarouselData = getBlogCarouselTransform(eachComponent)
                eachOutputFromInput.push(blogCarouselData)
            }
            if(isIncludeComponent(eachComponent?.uid,"short_banner")){
                const shorttBannerData = getShortBannerTransform(eachComponent)
                eachOutputFromInput.push(shorttBannerData)
            }
            if(isIncludeComponent(eachComponent?.uid,"video_and_text_banner")){
                const videoAndTextBannerData = getVideoAndTextBannerTransform(eachComponent)
                eachOutputFromInput.push(videoAndTextBannerData)
            }
            if(isIncludeComponent(eachComponent?.uid,"reward_banner")){
                const rewardBannerData = getRewardBannerTransform(eachComponent)
                eachOutputFromInput.push(rewardBannerData)
            }
            if(isIncludeComponent(eachComponent?.uid,"banner_carousel")){
                const bannerCarouselData = getBannerCarouselTransform(eachComponent)
                eachOutputFromInput.push(bannerCarouselData)
            }
            
        })
        modules = [...modules, ...eachOutputFromInput]
    })
    const outputData = getPageTitleTransformed(sourceData, modules);
    return outputData;

}