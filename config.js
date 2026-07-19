/*
  MENTOR3X — Configuração do Supabase

  1. Acesse: https://supabase.com/dashboard/project/emnyioovbakygmqhmbpc/settings/api
  2. Copie a chave "anon public" (NUNCA a "service_role" — essa é secreta e não
     deve aparecer em código de frontend).
  3. Cole abaixo, no lugar de "COLE_AQUI_SUA_ANON_PUBLIC_KEY".
  4. Rode o script supabase/schema.sql no SQL Editor do painel Supabase antes
     de usar (cria a tabela profiles, as políticas de RLS e o gatilho que
     promove silvalucasfsa@gmail.com a administrador automaticamente).

  Enquanto SUPABASE_ANON_KEY não for preenchida, o app funciona em modo local
  (login/cadastro salvos só no navegador) — útil para testar antes de publicar.
*/

window.SUPABASE_URL = "https://emnyioovbakygmqhmbpc.supabase.co";
window.SUPABASE_ANON_KEY = "sb_publishable_xzSOvZSoN5CnJQ-TVsQBAQ_YTjlOUdH";
