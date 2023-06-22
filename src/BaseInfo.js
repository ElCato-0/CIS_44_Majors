import { useState } from 'react';

function FullScreenImage({ src, alt, thumbnailClass, fullScreenClass }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const handleFullScreenClose = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="relative z-10">
      <div
        className={`w-64 h-64 md:w-80 md:h-80 bg-gray-400 cursor-pointer ${thumbnailClass}`}
        style={{ backgroundImage: `url('${src}')`, backgroundSize: 'cover' }}
        onClick={handleImageClick}
      />
      {isFullScreen && (
        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center ${fullScreenClass}`}
          onClick={handleFullScreenClose}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full"
          />
        </div>
      )}
    </div>
  );
}

export default function BaseInfo(props) {
    return (
        <article className='prose'>
            <h1>الخطة</h1>
            <p>
                اضغط على الصورة لتكبيرها
            </p>
            <br />
            {/* display an image */}
            <div className="join join-vertical md:join-horizontal mx-auto">
                <FullScreenImage src={props.image1} class="join-item object-cover h-48 w-96" />
                <img src={props.image2} class="join-item object-cover h-48 w-96" />
            </div>

            <br />
            <br />
            <h1>
                المقررات
            </h1>
            <br />
            <br />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-right">المقرر</th>
                            <th className="text-right">الوصف التقريبي</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* loop for each row in props.data and display a tr */}
                        {props.data.map((row, index) => {
                            return (
                                <tr key={index}>
                                    {/* loop for each column in the row and display a td */}
                                    {row.map((column, index) => {
                                        return (
                                            <td key={index} className="text-right">{column}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </article>
    );
}