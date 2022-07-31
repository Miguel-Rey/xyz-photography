
export const BackgroundAnimation = {
  enter: {
    opacity: 0.3,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0.3,
  }
};

export const ImageAnimation = {
  enter: {
    opacity: 0,
    y: '10%'
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
    y: '-10%'
  },
};

export const TitleAnimation = {
  enter: {
    opacity: 0,
    y: '-10%',
    x: '-50%',
  },
  center: {
    opacity: 1,
    y: '-0%',
    x: '-50%',
    transition: {
      delay: 0.4
    }
  },
  exit: {
    opacity: 0,
    y: '10%'
  },
}

export const SubtitleAnimation = {
  enter: {
    opacity: 0,
    y: '-20%',
    x: '-50%',
  },
  center: {
    opacity: 1,
    y: '-0%',
    x: '-50%',
    transition: {
      delay: 0.4
    }
  },
  exit: {
    opacity: 0,
    y: '20%'
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