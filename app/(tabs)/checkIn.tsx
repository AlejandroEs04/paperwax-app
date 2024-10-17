import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function checkIn() {
    return (
        <ThemedView>
            <ThemedText type='title' style={styles.title}>Registrar entrada</ThemedText>
        </ThemedView>
    )
}

export const styles = StyleSheet.create({
    title: {
        paddingTop: 20
    }
})
