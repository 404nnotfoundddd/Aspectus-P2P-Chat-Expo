import { z } from 'zod'

const schemaObject = {
    EXPO_PUBLIC_SOCKETIO_URI: z.string().url(),
    EXPO_PUBLIC_FASTIFY_ORIGIN: z.string().url(),
    EXPO_PUBLIC_NODE_ENV: z.enum(['development', 'production'])
}

const envSchema = z.object(schemaObject)

const processEnv = process.env as Record<string, string | undefined>
export const env = envSchema.parse(processEnv)