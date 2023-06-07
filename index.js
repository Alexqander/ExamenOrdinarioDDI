const television = {
  volumen: 3,
  encendido: false,
  canal: 7,
  mute: false,
  volAnt: 0,
};
let { volumen, encendido, canal, mute, volAnt } = television;

const handleVolume = (action) => {
  if (!encendido) {
    console.log("La tele esta apagada");
    return 0;
  }
  if (action == 1) {
    if (volumen == 10) {
      console.log("El volumen maximo es 10");
    } else {
      volumen = volumen + 1;
      console.log(
        `encendido: ${encendido} canal: ${canal} volumen: ${volumen} mute: ${mute}`
      );
    }
  }
  if (action == -1) {
    if (volumen < 1) {
      console.log("El volumen minimo es 1");
    } else {
      volumen = volumen - 1;
      console.log(
        `encendido: ${encendido} canal: ${canal} volumen: ${volumen} mute: ${mute}`
      );
    }
  }
};

const handleChanels = (action) => {
  if (!encendido) {
    console.log("La tele esta apagada");
    return 0;
  }
  if (action == 1) {
    if (canal == 100) {
      console.log("El canal maximo es 100");
    } else {
      canal = canal + 1;
      console.log(
        `encendido: ${encendido} canal: ${canal} volumen: ${volumen} mute: ${mute}`
      );
    }
  }
  if (action == -1) {
    if (canal < 1) {
      console.log("El canal minimo es 1");
    } else {
      canal = canal - 1;
      console.log(
        `encendido: ${encendido} canal: ${canal} volumen: ${volumen} mute: ${mute}`
      );
    }
  }
};

const handleMute = () => {
  if (!encendido) {
    console.log("La tele esta apagada");
    return 0;
  }
  mute = !mute;
  volAnt = volumen;
  if (mute) {
    console.log("La tele esta muteada");
    volumen = 0;
    console.log(
      `encendido: ${encendido} canal: ${canal} volumen: ${volumen} mute: ${mute}`
    );
  } else {
    console.log("La tele esta desmuteada");
    console.log(
      `encendido: ${encendido} canal: ${canal} volumen: ${volAnt} mute: ${mute}`
    );
  }
};

const handlePowerOff = () => {
  encendido = !encendido;
  canal = 7;
  volumen = 3;
  console.log(
    `encendido: ${encendido} canal: ${canal} volumen: ${volumen} mute: ${mute}`
  );
};
