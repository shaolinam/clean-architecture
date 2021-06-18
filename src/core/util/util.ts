import { format } from "date-fns";

export default {
  horaFmtAtual() {
    const agora = new Date()
    return format(agora, "HH:mm:ss")
  }
}