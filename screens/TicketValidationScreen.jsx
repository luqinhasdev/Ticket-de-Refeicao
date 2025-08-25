// 3. Tela da Validação do Ticket
// Permite ao atendente "verificar" se o aluno tem um ticket válido.
// Ao usar o ticket, ele deve ser marcado como "usado".
// Exibir nome/matrícula do aluno e status do ticket.

import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { TicketContext } from "./TicketContext";

export default function TelaValidacaoTicket() {
  const { aluno, statusTicket, setStatusTicket } = useContext(TicketContext);

  const verificarTicket = () => {
    if (statusTicket === "Nenhum") {
      Alert.alert("Verificação", "O aluno não tem ticket.");
    } else if (statusTicket === "Disponível") {
      Alert.alert("Verificação", "Ticket válido! 🎟️");
    } else {
      Alert.alert("Verificação", "O ticket já foi usado.");
    }
  };

  const usarTicket = () => {
    if (statusTicket === "Disponível") {
      setStatusTicket("Usado");
      Alert.alert("Sucesso", "Ticket usado com sucesso!");
    } else if (statusTicket === "Nenhum") {
      Alert.alert("Erro", "Aluno não possui ticket para usar.");
    } else {
      Alert.alert("Erro", "O ticket já foi usado!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Validação de Ticket</Text>

      <View style={styles.card}>
        <Text style={styles.texto}>Nome: {aluno.nome}</Text>
        <Text style={styles.texto}>Matrícula: {aluno.matricula}</Text>
        <Text style={styles.texto}>Status do Ticket: {statusTicket}</Text>
      </View>

      <Button title="Verificar Ticket" onPress={verificarTicket} />
      <Button title="Usar Ticket" onPress={usarTicket} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    width: "100%", backgroundColor: "#fff", padding: 15, borderRadius: 10,
    marginBottom: 20, elevation: 3,
  },
  texto: { fontSize: 16, marginVertical: 5 },
});
