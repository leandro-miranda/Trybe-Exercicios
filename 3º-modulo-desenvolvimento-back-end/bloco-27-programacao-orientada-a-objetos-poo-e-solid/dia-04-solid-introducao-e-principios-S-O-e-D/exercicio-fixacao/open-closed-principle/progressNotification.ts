// export default function progressNotification(
//   message: string,
//   notificationType: string,
// ): void {
//   switch (notificationType) {
//     case 'Email':
//       console.log('Email: ', message);
//       break;
//     case 'Phone':
//       console.log('Phone: ', message);
//       break;
//     case 'Console':
//       console.log('Console: ', message);
//       break;
//     default:
//       console.log(message);
//       break;
//   }
// }

// REFATORAR PARA UTILIZAR O PRINCÍPIO DE ABERTO/FECHADO

type notificationParams = {
  type: string;
  send: (message: string) => void
};

// Criando variáveis para guardar cada tipo aceito por nossa função
const emailNotification = {
  type: 'Email',
  send: (message: string) => console.log('Email: ', message),
};

const phoneNotification = {
  type: 'Phone',
  send: (message: string) => console.log('Phone: ', message),
};

const consoleNotification = {
  type: 'Console', 
  send: (message: string) => console.log('Console: ', message),
};

const notifications: notificationParams[] = [
  emailNotification,
  phoneNotification,
  consoleNotification,
];

// Agora podemos adicionar novos tipos sem modificar nossa função
export default function progressNotification(
  message: string,
  type_ = 'Console',
  notificationsArray: notificationParams[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === type_) {
      notification.send(message);
    }
  });
}