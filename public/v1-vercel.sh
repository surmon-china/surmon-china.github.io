# https://www.konabos.com/blog/branch-and-conditional-deploys-in-vercel
# https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel
# https://github.com/vercel/vercel/discussions/5171
if [[ "$VERCEL_GIT_COMMIT_REF" == "$BRANCH_TO_BUILD" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;
else
  # Don't build
  echo "🛑 - Build canceled"
  exit 0;
fi