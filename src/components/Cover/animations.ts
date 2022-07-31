
export const BackgroundAnimation = {
  enter: {
    opacity: 0.4,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0.4,
  }
};

export const ImageAnimation = {
  enter: {
    opacity: 0,
    y: -100
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4
    }
  },
  exit: {
    opacity: 0,
    y: -150
  },
};

export const TitleAnimation = {
  enter: {
    opacity: 0,
    y: 100,
    x: '-50%',
  },
  center: {
    opacity: 1,
    y: 0,
    x: '-50%',
    transition: {
      delay: 0.4
    }
  },
  exit: {
    opacity: 0,
    y: 150,
    x: '-50%',
  },
}

export const SubtitleAnimation = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
    transition: {
      delay: 0.4
    }
  },
  exit: {
    opacity: 0,
  },
}

export const LinkBoxAnimation = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
    transition: {
      delay: 0.4
    }
  },
  exit: {
    opacity: 0,
  }
}