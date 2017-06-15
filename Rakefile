require 'bundler/gem_tasks'
task default: :spec

task :compile do
  sh 'npm install'
  sh 'npm run build'

  puts '=' * 30
  puts 'Assets just built!'
end
