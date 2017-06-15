require 'bundler/gem_tasks'

task :compile do
  sh 'npm install'
  sh 'npm run build'

  puts '=' * 30
  puts 'Assets just built!'

  sh 'git add .'
  sh 'gem bump'
end

task default: :compile
