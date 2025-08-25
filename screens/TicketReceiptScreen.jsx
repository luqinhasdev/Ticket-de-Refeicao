// 2. Tela de Recebimento de Ticket
// Deve mostrar um botão "Receber Ticket" apenas nos 5 minutos antes do intervalo.
// Aluno só pode receber 1 ticket por dia.
// Deve simular se o aluno está dentro da "região permitida" (ex: botão que representa estar na escola).
// Após receber o ticket, o status muda para "Ticket disponível".

import React, { useState, useEffect, useContext } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { TicketContext } from "./TicketContext";

export default function TelaRecebimentoTicket() {
  const { statusTicket, setStatusTicket } = useContext(TicketContext);
  const [horaAtual, setHoraAtual] = useState(new Date());
  const [naEscola, setNaEscola] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => setHoraAtual(new Date()), 1000);
    return () => clearInterval(intervalo);
  }, []);

  const dentroDoHorario = () => {
    const h = horaAtual.getHours();
    const m = horaAtual.getMinutes();
    return h === 9 && m >= 55 && m <= 59; // intervalo simulado 10h
  };

  const receberTicket = () => {
    if (!naEscola) {
      Alert.alert("Atenção", "Você precisa estar na escola para receber o ticket!");
      return;
    }
    if (statusTicket !== "Nenhum") {
      Alert.alert("Ops", "Você já recebeu seu ticket hoje.");
      return;
    }
    if (!dentroDoHorario()) {
      Alert.alert("Atenção", "O botão só funciona nos 5 minutos antes do intervalo!");
      return;
    }
    setStatusTicket("Disponível");
    Alert.alert("Sucesso", "Ticket disponível!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recebimento de Ticket</Text>
      <Text style={styles.texto}>Hora atual: {horaAtual.toLocaleTimeString()}</Text>
      <Text style={styles.texto}>Status: {statusTicket}</Text>

      <Button
        title={naEscola ? "Sair da Escola" : "Entrar na Escola"}
        onPress={() => setNaEscola(!naEscola)}
      />

      {dentroDoHorario() && statusTicket === "Nenhum" && (
        <Button title="Receber Ticket" onPress={receberTicket} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  texto: { fontSize: 16, marginVertical: 10 },
});
