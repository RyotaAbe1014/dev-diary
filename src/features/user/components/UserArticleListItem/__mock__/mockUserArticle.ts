export const mockUserArticle = {
    id: 1,
    userId: '0ee0eb25-4ea9-42a8-8c97-4be860a3c18b',
    title: 'Supabaseに値を入れる方法',
    body: '### Supabaseに値を入れる\n' +
        '```js\n' +
        "'use server';\n" +
        '\n' +
        'import { logout } from "@/features/auth/actions/logout";\n' +
        'import { createClient } from "@/lib/supabase/server";\n' +
        'import { redirect } from "next/navigation";\n' +
        '\n' +
        'export async function createArticle({ title, description, text }: { title: string, description: string, text: string }) {\n' +
        "  console.log('createArticle', text);\n" +
        '  const supabase = createClient();\n' +
        '  const userResponse = await supabase.auth.getUser();\n' +
        '\n' +
        '  const user = userResponse.data.user;\n' +
        '\n' +
        '  if (!user) {\n' +
        '    await logout();\n' +
        '    return;\n' +
        '  }\n' +
        '\n' +
        "  const { error } = await supabase.from('articles').insert([\n" +
        '    {\n' +
        "      'user_id': user.id,\n" +
        "      'title': title,\n" +
        "      'body': text,\n" +
        "      'description': description\n" +
        '    },\n' +
        '  ]).select();\n' +
        '\n' +
        '  console.log(error);\n' +
        '\n' +
        '  if (error) {\n' +
        '    return error.message;\n' +
        '  }\n' +
        '\n' +
        "  redirect('/user/article');\n" +
        '}\n' +
        '```',
    isPublic: false,
    inserted_at: '2024-04-08T15:54:11.421427+00:00',
    description: '使ってみたシリーズ'
};
