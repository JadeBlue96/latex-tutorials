require 'json'
require 'fileutils'

module Jekyll
  class EqnsJsonGenerator < Generator
    priority :low

    def generate(site)
      levels = ["beginner","intermediate","advanced"]
     
      for level in levels 
        json_file = File.new(File.join(site.config["destination"],"practice","#{level}.json"),"w");

        pages = []

        site.pages.each do |page|
          if page.data['difficulty'] && page.data['difficulty'] == "#{level}"
            pages << {
              :title => page.data['title'],
              :url => page.url,
              :content => page.content
            } 
          end
        end

        json_file.write(pages.to_json)
        json_file.close

        site.static_files << Jekyll::JsonFile.new(site,site.config["destination"],"/","practice/#{level}.json")
      end
    end
  end

  class JsonFile < StaticFile
    def write(dest)
      begin
        super(dest)
      rescue
      end

      true
    end
  end

  class EqnsJsonTag < Liquid::Tag
    def initialize(tag_name,text,tokens)
      super
      @text = text.strip
    end

    def render(context)
      IO.read(File.join(context.registers[:site].config["destination"],"practice","#{@text}.json"))
    end
  end
end

Liquid::Template.register_tag('eqns',Jekyll::EqnsJsonTag)
