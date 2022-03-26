import { encryptContent, decryptContent } from "./encryption";

it('is empty, correct password', () => {
    const str = ''
    const encrypted = encryptContent(str, '123')
    const decrypted = decryptContent(encrypted, '123')
    expect(decrypted).toBe(str)
})

it('simple string, correct password', () => {
    const str = 'Hello world!'
    const encrypted = encryptContent(str, 'verytest111')
    const decrypted = decryptContent(encrypted, 'verytest111')
    expect(decrypted).toBe(str)
})

it('simple string, incorrect password', () => {
    const encrypted = encryptContent('Hello world!', 'verytest111')
    const decrypted = decryptContent(encrypted, 'incorrect222')
    expect(decrypted).toBe(null)
})
