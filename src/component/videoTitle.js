const VideoTitle = ({title,overview}) =>{
    return(
      <div className=" w-screen aspect-video pt-[17%] px-12 absolute text-white bg-gradient-to-r from black">
        <h1 className="text-6xl bold w-1/4">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <button className="mx-2 bg-gray-50 text-black p-3 px-12 rounded-lg text-xl hover:bg-opacity-90 ">▶️ Play</button>
        <button className="mx-2 bg-gray-500 text-white p-3 px-12 rounded-lg text-xl bg-opacity-50 hover:bg-opacity-35">More Info  </button>
      </div>
    );
    
};
export default VideoTitle;


/*{
  "id": 359410,
  "results": [
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Dalton's Boat Explosion",
      "key": "jvIhziyDmmY",
      "site": "YouTube",
      "size": 1080,
      "type": "Clip",
      "official": true,
      "published_at": "2024-03-23T17:00:28.000Z",
      "id": "65ff617260620a017c2bc0ed"
    },
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Dalton and Knox Hit It Off",
      "key": "1Rmbo8XI6x0",
      "site": "YouTube",
      "size": 1080,
      "type": "Clip",
      "official": true,
      "published_at": "2024-03-22T17:00:00.000Z",
      "id": "65ff617a378062017c39f4ea"
    },
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Meet the Characters",
      "key": "bIZIGrVuMow",
      "site": "YouTube",
      "size": 1080,
      "type": "Featurette",
      "official": true,
      "published_at": "2024-03-21T21:00:19.000Z",
      "id": "65ff61c062f3350164511184"
    },
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Inside the Road House",
      "key": "2WOTXGpuzvI",
      "site": "YouTube",
      "size": 1080,
      "type": "Featurette",
      "official": true,
      "published_at": "2024-03-21T15:00:37.000Z",
      "id": "65ff61d53520e80132d507f4"
    },
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Dalton’s First Fight at the Road House",
      "key": "spmpAd4RUro",
      "site": "YouTube",
      "size": 1080,
      "type": "Clip",
      "official": true,
      "published_at": "2024-03-20T15:00:56.000Z",
      "id": "65ff62e262f335017d51c5db"
    },
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "First look at Jake Gyllenhaal as Dalton",
      "key": "xw4Ff1qNNVo",
      "site": "YouTube",
      "size": 1080,
      "type": "Clip",
      "official": true,
      "published_at": "2024-03-19T17:00:45.000Z",
      "id": "65fa1fc9fad8e90163239174"
    },
    {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Official Trailer",
      "key": "Y0ZsLudtfjI",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer",
      "official": true,
      "published_at": "2024-01-25T15:00:31.000Z",
      "id": "65b283cefd140b00e8a0a0e1"
    }
  ]
}*/