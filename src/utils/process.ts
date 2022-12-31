const convertElapsedTime = (time: number) => {
  let seconds: string = "";
  let currentSeconds: number = Math.floor(time % 60);
  let currentMinutes: number = Math.floor(time / 60);

  if (currentSeconds < 10) {
    seconds = `0${currentSeconds}`;
  } else {
    seconds = `${currentSeconds}`;
  }

  return `${currentMinutes} : ${seconds}`;
};

export { convertElapsedTime };
