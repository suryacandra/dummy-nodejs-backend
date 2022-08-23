import Data from '../model/data.js'
// import { listOfFiles, UploadcareSimpleAuthSchema } from '@uploadcare/rest-client'


const art = async (req, res) => {
    const data = await Data.find({}).exec()
    // const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
    //     publicKey: '',
    //     secretKey: '',
    //   });
      
    //   const result = await listOfFiles({limit: 155}, { authSchema: uploadcareSimpleAuthSchema })
    //   const aduh = result.results
    //   const newArr = []
    //   for(const key in aduh) {
    //       newArr.push({
    //           uuid: aduh[key].uuid,
    //           author: "洋菓子",
    //           author_url: "https://pixiv.net/users/13552917/",
    //           image_url: `https://ucarecdn.com/${aduh[key].uuid}`,
    //           optimaze_url: `https://ucarecdn.com/${aduh[key].uuid}/-/preview/-/quality/smart/`,
    //           thumb_url: `https://ucarecdn.com/${aduh[key].uuid}/-/preview/400x400/-/quality/smart/`,
    //       })
    //   }
    res.json(data)
}

export default art