import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'

const VideoSection = () => {
  const [modalOpen, setModalOpen] = useState(false)

  ReactModal.setAppElement('#root')

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]

    if (modalOpen) {
      html.classList.add('lock-scroll')
    } else {
      html.classList.remove('lock-scroll')
    }
    return () => {
      html.classList.remove('lock-scroll')
    }
  }, [modalOpen])

  return (
    <div>
      <div className='w-full h-[450px] bg-cover cursor-pointer' id='video-section' onClick={handleOpenModal}>
        <div className="w-full h-full flex bg-black/40 justify-center items-center">
          <img src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/play-button-white.png" alt="" />
        </div>
      </div>

      <ReactModal isOpen={modalOpen} onRequestClose={handleCloseModal} shouldCloseOnOverlayClick={true} className='aspect-video md:h-[500px] w-full md:w-auto border-none absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2' overlayClassName='fixed top-0 bottom-0 left-0 right-0 bg-[#393F70]/40'>
        <iframe src="https://www.youtube.com/embed/iPATxlVp5gU" className='w-full h-full' frameborder="0" title='Youtube video player'></iframe>
      </ReactModal>
    </div>
  )
}

export default VideoSection