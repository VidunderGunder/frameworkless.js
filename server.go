package main

import (
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	fs := http.FileServer(http.Dir("./public/"))
	http.Handle("/public/", http.StripPrefix("/public/", fs))
	http.HandleFunc("/", serveTemplate)

	log.Print("Server started on http://127.0.0.1:2222")
	err := http.ListenAndServe("127.0.0.1:2222", nil)
	if err != nil {
		log.Fatal(err)
	}
}

func serveTemplate(w http.ResponseWriter, r *http.Request) {
	layout := filepath.Join("templates", "layout.gohtml")
	file := filepath.Join("templates", filepath.Clean(r.URL.Path))

	isFolder := r.URL.Path[len(r.URL.Path)-1] == '/'
	if isFolder {
		file = filepath.Join(file, "index.gohtml")
	} else if filepath.Ext(file) == "" {
		file = file + ".gohtml"
	}

	_, err := os.Stat(file)
	if err != nil {
		if os.IsNotExist(err) {
			file = filepath.Join("templates", "/404.gohtml")
		} else {
			log.Fatal(err)
		}
	}

	tmpl, _ := template.ParseFiles(layout, file)
	tmpl.ExecuteTemplate(w, "layout", nil)
}
