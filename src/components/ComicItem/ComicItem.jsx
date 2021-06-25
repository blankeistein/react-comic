import './comic-item.css';

function ComicItem() {

	return (
		<div className="itemComicContainer">
		  <a href="#" target="_blank">
		    <div className="itemComicCoverWrapper">
		      <img src="https://dummyimage.com/200x320/000000/fff" className="comicCover" />
		      <span className="comicCoverLabel">Manga</span>
		    </div>
		    <div className="itemComicInfoWrapper">
		      <div className="titleWrapper">
		        <p className="titleComic">Naruto sadddddddddddddddddddddddddddddddddddddddd</p>
		      </div>
		        <small className="lastChapterComic">Eps. 46</small>
		    </div>
		  </a>
		</div>
	)
}

export default ComicItem;