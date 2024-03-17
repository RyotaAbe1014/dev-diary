'use server';

export async function login(email: string, password: string) {
    // 1秒待つ
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(email, password);
    // TODO: ログイン機能を実装する
    // 1. zodでemailとpasswordのバリデーションを行う
    // 2. ログインのAPIを叩く
    // 3. ログインに成功したら、トークンをcookieに保存する
    // 4. ログインに失敗したら、エラーメッセージを表示する
    // 5. ホーム画面に遷移する

}