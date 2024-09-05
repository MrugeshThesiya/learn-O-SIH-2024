"use client"
import React, { useEffect, useState, useRef } from 'react'
import DBService from '@/backend/Database'
import { videoData } from '@/constants'
import { Loader } from '@/components'
import "./learn.css"
import storageService from '@/backend/Storage'

export default function Learn() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [data, setData] = useState<videoData[]>()
  const [load, setLoad] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("https://cloud.appwrite.io/v1/storage/buckets/66d99f1600324c0dce34/files/66d99f59003803d3fc23/view?project=66d99c610036e246192e&project=66d99c610036e246192e&mode=admin")
  const [selectedVideo, setSelectedVideo] = useState<videoData>({
    id: "1",
    Text: "Hello",
    videoId: "66d99f59003803d3fc23"
  });


  const handleVideoSelect = async (video: videoData) => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 3000)
    setSelectedVideo(video);
    try {
      const vidLink = await storageService.getVideo(video.videoId)
      if (vidLink && vidLink.href) {
        console.log(vidLink);
        setUrl(vidLink.href)
      }
    } catch (error) {
      console.log("video fetching error " + error);
    }
  };


  useEffect(() => {
    setLoad(true)
    DBService.getData().then((data) => {
      if (data) {
        setData(data.documents.map((item) => ({ id: item.$id, Text: item.Text, videoId: item.videoId })))
      }
    })
      .finally(() => setLoad(false))
  }, [])
  return (
    <>
      {load && <Loader />}
      <div className="app">

        {selectedVideo && (
          <div className="video-display mb-10 flex gap-4 items-center justify-center">
            <h3>
              Word : {selectedVideo.Text}
            </h3>
            <div className='aspect-video w-[30rem] object-contain'>
              {/* <video  autoPlay loop muted src={url}>
                Your browser does not support the video tag.
              </video> */}
              <video
                ref={videoRef}
                className="w-full h-auto rounded-lg shadow-lg"
                controls
                autoPlay
                loop
                muted
                src={url}
              >
                <source  type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        )}

        <div className="video-list flex items-center justify-center gap-4 flex-wrap">
          {data && data.map((video) => (
            <button key={video.id} onClick={() => handleVideoSelect(video)}>
              {video.Text}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}