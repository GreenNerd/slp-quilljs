lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'slp/quilljs/version'

Gem::Specification.new do |spec|
  spec.name          = 'slp-quilljs'
  spec.version       = Slp::Quilljs::VERSION
  spec.authors       = ['Phil Chen']
  spec.email         = ['hi@skylarkly.com']

  spec.summary       = 'quilljs for skylark'
  spec.homepage      = 'https://github.com/GreenNerd/slp-quilljs'
  spec.license       = 'MIT'

  spec.files         = Dir['lib/**/*'] + Dir['vendor/**/*'] + ['Rakefile', 'README.md']
  spec.require_paths = ['lib']

  spec.add_development_dependency 'bundler', '~> 1.13'
  spec.add_development_dependency 'rake', '~> 10.0'
end
