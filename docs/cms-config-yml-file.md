# Definitions for config.yml settings

backend:
name: git-gateway <open source API that acts as a proxy between authenticated users of the site and the site repo>
branch: master <defaults to master if not included. changes made in Netlify CMS, matches content in the repo on the master branch.>

<Works by pointing CMS to folder which holds media. Specifies where uploaded files are saved in the repo>
media_folder: static/images

<Indicates where they are found in the published site. image src attribute uses this path, which is relative to the file where its called. For this reason, we usually start the path at site root, using the opening '/'>
<If public_folder is not set, netlify CMS defaults to the same value as media_folder, adding an opening '/' if one is not included.>
public_folder: /images

<Provides link to site url in CMS, so you can go back to the site>
site_url: https://bambinakatarina.netlify.app/

<Collections define the structure for the different content types on your static site.>
collections:
  - name: travel <Used in routes, e.g., /admin/collections/blog>
    label: Travel <Used in the UI>
    folder: blog/travel <The path to the folder where the documents are stored>
    extension: json <Determines saved file format of posts in CMS>
    format: json
    create: true <Allow users to create new documents in this collection>
    slug: "{{year}}-{{month}}-{{day}}_{{slug}}" <Filename template, e.g., YYYY-MM-DD-title.md>
    fields: <The fields for each document, usually in front matter>
      - { name: title, label: Title, widget: string }
      - {
          name: date,
          label: Date,
          dateFormat: "DD/MM/YYYY",
          timeFormat: HH:mm,
          widget: datetime,
        }
      - { name: body, label: Body, widget: markdown }
