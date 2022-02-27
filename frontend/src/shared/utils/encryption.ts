import AES from "crypto-js/aes";
import utf8 from 'crypto-js/enc-utf8';
import {ENCRYPTION_SALT, PROTECTED_NOTE_PLAINTEXT_PREFIX} from "../constants/encryption";

export const encryptContent = (content: string, password: string) => {
    const key = password + ENCRYPTION_SALT
    return AES.encrypt(PROTECTED_NOTE_PLAINTEXT_PREFIX + content, key).toString()
}

export const decryptContent = (content: string, password: string | null) => {
    if (password === null)
        return null;
    const key = password + ENCRYPTION_SALT
    const decrypted = AES.decrypt(content, key).toString(utf8)
    if (!decrypted.startsWith(PROTECTED_NOTE_PLAINTEXT_PREFIX))
        return null;
    return decrypted.substring(PROTECTED_NOTE_PLAINTEXT_PREFIX.length)
}
