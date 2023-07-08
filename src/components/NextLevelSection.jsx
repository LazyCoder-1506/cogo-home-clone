import React from 'react'

const NextLevelSection = () => {
  return (
    <div className='w-full py-10 bg-secondary'>
      <div className="md:w-3/4 mx-auto px-2 flex flex-col md:flex-row items-start md:justify-between gap-4">
        <h4 className="text-2xl font-bold">Ready to take your Supply Chain to the Next Level?</h4>
        <button className="bg-primary text-white font-bold py-2 px-4 rounded inline">
          <div className="inline-flex w-fit">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="1em" height="1em" role="img" className='fill-current ms-2 mt-1'><path class="ic-m-arrow_rotate_right_svg__ic_m_arrow_rotate_right" d="M4.375 1.724a.64.64 0 0 0-.12.045.639.639 0 0 0-.239.319c-.019.073-.026 1.483-.026 4.918 0 4.214.004 4.83.035 4.933a.532.532 0 0 0 .476.358c.199 0 .109.084 2.716-2.518 1.492-1.488 2.489-2.501 2.519-2.557a.533.533 0 0 0 .008-.432c-.054-.106-4.9-4.96-5.008-5.016a.612.612 0 0 0-.361-.05" fill-rule="evenodd"></path></svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default NextLevelSection