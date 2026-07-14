$branches = git for-each-ref --sort=committerdate refs/remotes/origin --format="%(refname:short)" | Where-Object { $_ -notmatch 'HEAD' -and $_ -notmatch 'origin/main$' -and $_ -notmatch 'gh-pages$' -and $_ -notmatch 'origin/final$' -and $_ -ne 'origin' }

foreach ($b in $branches) {
    Write-Host "Merging $b..."
    git merge $b -m "Merge $b into final" -X theirs --allow-unrelated-histories --no-edit
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Conflict detected. Resolving..."
        git add .
        git commit -m "Resolve conflicts for $b" --no-edit
    }
}

Write-Host "All merges completed. Applying .gitignore..."
$gitignore = @"
# Node
node_modules/
dist/
build/
.env

# Java
target/
*.class

# Python
__pycache__/
*.py[cod]
*$py.class
venv/
.venv/
env/
.env/

# IDEs
.idea/
.vscode/
*.swp
.DS_Store

# OS
Thumbs.db
"@
Set-Content -Path ".gitignore" -Value $gitignore

git rm -r --cached .
git add .
git commit -m "Apply .gitignore and clean up ignored files"

Write-Host "Pushing final branch..."
git push -u origin final
