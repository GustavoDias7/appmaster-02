const scrollToTitle = (clickEvent, idTitle) => {
  clickEvent.preventDefault();

  const titleTopDistance = document.getElementById(idTitle).offsetTop;
  const headerHeight = document.querySelector("#root > header").clientHeight;
  const adicionalSpace = 8;

  window.scrollTo(0, titleTopDistance - headerHeight - adicionalSpace);
};

export default scrollToTitle;
